import { ICardEntityMetadata } from "../../typings";

export interface IProps {
  entityId: string;
  positionX: number;
  positionY: number;
  zIndex: number;
  rotation: number;
  faceUp: boolean;
  inHandOf: string;
  metadata: ICardEntityMetadata;
  hoverFeedback: boolean;

  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
