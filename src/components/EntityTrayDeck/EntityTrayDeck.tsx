import React from "react";
import { DimensionsScaler } from "../DimensionsScaler";
import { EntityCore } from "../EntityCore";
import { ImageLoader } from "../ImageLoader";
import { IProps } from "./typings";
import { style } from "./style";

export const EntityTrayDeck = ({ width, height, deckGraphicEndpoint, previewGraphicEndpoint, onDragStart }: IProps) => (
  <>
    <div className="entity-tray-deck">
      <div className="entity-tray-deck__preview">
        <DimensionsScaler width={width} height={height}>
          <ImageLoader resourceRoute={previewGraphicEndpoint} />
        </DimensionsScaler>
      </div>
      <EntityCore
        width={width}
        height={height}
        graphicEndpoint={deckGraphicEndpoint}
        eventHandlerMapping={{
          onDragStart,
        }}
        classnames={["entity-tray-tray-deck-illusion"]}
      />
    </div>
    <style jsx={true}>{style}</style>
  </>
);
