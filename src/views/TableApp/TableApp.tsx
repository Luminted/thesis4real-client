import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ESocketConnectionStatuses } from "../../typings";
import { selectOwnClientInfo, selectTableConnectionStatus } from "../../selectors";
import { setClientInfo, setTableSocketStatus, socketEmitConnect, socketEmitRejoinTable } from "../../actions";
import { TableAppLayout } from "../../components/TableAppLayout";
import { infoNotification, successNotification, warningNotification } from "../../utils";
import { getRejoinErrorMessage, observerInfoMessage, rejoinInfoMessage, rejoinSuccessMessag } from "../../config";

export const TableApp = () => {
  const dispatch = useDispatch();

  const connectionStatus = useSelector(selectTableConnectionStatus);
  const clientInfo = useSelector(selectOwnClientInfo);

  const isObserving = !clientInfo;

  useEffect(() => {
    if (connectionStatus === ESocketConnectionStatuses.CONNECTED) {
      if (clientInfo) {
        const { clientId } = clientInfo;
        infoNotification(rejoinInfoMessage);
        dispatch(
          socketEmitRejoinTable(clientId, (err) => {
            if (err) {
              dispatch(setClientInfo(null));
              warningNotification(getRejoinErrorMessage(err));
            } else {
              successNotification(rejoinSuccessMessag);
            }
          }),
        );
      }
    }
    // eslint-disable-next-line
  }, [connectionStatus]);

  useEffect(() => {
    if (isObserving) {
      infoNotification(observerInfoMessage, false);
    }
  }, [isObserving]);

  useEffect(() => {
    if (connectionStatus === ESocketConnectionStatuses.DISCONNECTED) {
      dispatch(socketEmitConnect());
      dispatch(setTableSocketStatus(ESocketConnectionStatuses.CONNECTING));
    }
    // eslint-disable-next-line
  }, []);

  return <TableAppLayout connectionStatus={connectionStatus} isObserver={isObserving} />;
};
