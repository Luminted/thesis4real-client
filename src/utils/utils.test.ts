import assert from 'assert';
import {mirrorOnTablePosition, inverseMirrorOnTablePosition} from './utils'

describe('Testing utility functions', function(){
    describe('mirrorOnTablePosition', function(){
        const positionX = 100;
        const positionY = 200;
        const tableWidth = 500;
        const tableHeight = 300;

        it('should mirror and translate by tables witdth on the x axis', function(){
            const transformedPosition = mirrorOnTablePosition(positionX, positionY, tableWidth, tableHeight);
            assert.equal(transformedPosition[0], -positionX + tableWidth);
        })
        it('should mirror and translate by tables height on the y axis', function(){
            const transformedPosition = mirrorOnTablePosition(positionX, positionY, tableWidth, tableHeight);
            assert.equal(transformedPosition[1], -positionY + tableHeight);
        })
    })

    describe('inverseMirrorOnTablePosition', function(){
        const positionX = 100;
        const positionY = 200;
        const tableWidth = 500;
        const tableHeight = 300;

        it('should invert mirrorOnTablePosition', function(){
            const transformedPosition = mirrorOnTablePosition(positionX, positionY, tableWidth, tableHeight);
            const invertedPosition = inverseMirrorOnTablePosition(transformedPosition[0], transformedPosition[1], tableWidth, tableHeight);
            assert.equal(invertedPosition[0], positionX);
            assert.equal(invertedPosition[1], positionY);
        })  
    })
})