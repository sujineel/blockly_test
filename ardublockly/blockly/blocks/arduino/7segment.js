/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['sevensegment'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("7 세그먼트")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("  CLK")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'CLK');
    this.appendDummyInput()
        .appendField("  DIO")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'DIO');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("세븐세그먼트 블럭입니다.");
 this.setHelpUrl("");
    },
updateFields: function() {
  Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'CLK', 'digitalPins');
  Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'DIO', 'digitalPins');
    }
};

Blockly.Blocks['setbrightness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("밝기 설정  ")
        .appendField(new Blockly.FieldNumber(2, 0, 7, 2), "bright");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("setBrightness() 함수입니다.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['showNumberDec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("숫자 출력  ")
        .appendField(new Blockly.FieldNumber(0, 0, 9999, 0), "number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("showNumberDec() 함수입니다.");
 this.setHelpUrl("");
  }
};
