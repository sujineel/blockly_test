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

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.io.HUE = 250;

Blockly.Blocks['3_led'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("3색LED ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Red_PIN")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'Red_PIN');//3, 5, 6, 8, 10, 11
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("  R(0~255)")
        .appendField(new Blockly.FieldNumber(0, 0, 255), 'Red_Value');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Green_PIN")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.pwmPins), 'Green_PIN');//3, 5, 6, 8, 10, 11
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("  G(0~255)")
        .appendField(new Blockly.FieldNumber(0, 0, 255), 'Green_Value');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blue_PIN")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'Blue_PIN');//3, 5, 6, 8, 10, 11
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("  B(0~255)")
        .appendField(new Blockly.FieldNumber(0, 0, 255), 'Blue_Value');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("3색 LED block입니다.");
 this.setHelpUrl("");
},
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'Red_PIN', 'pwmPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'Green_PIN', 'pwmPins');
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'Blue_PIN', 'pwmPins');
}
};
