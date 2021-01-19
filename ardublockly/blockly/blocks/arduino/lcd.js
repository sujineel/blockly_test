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

Blockly.Blocks['lcd'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("LCD")
        .appendField(new Blockly.FieldDropdown([["0x27","0x27"], ["0x3F","0x3F"]]), "menu")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("  좌표설정")
        .appendField("x값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 15), "x")
        .appendField(" y값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 1), "y");
    this.appendDummyInput()
        .appendField("  화면출력")
        .appendField(new Blockly.FieldTextInput("변수"), "content");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("12C LCD 센서입니다.");
 this.setHelpUrl("");
}
};

Blockly.Blocks['lcd_text'] = {
  init: function() {
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("LCD")
        .appendField(new Blockly.FieldDropdown([["0x27","0x27"], ["0x3F","0x3F"]]), "menu")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("  좌표설정")
        .appendField("x값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 15), "x")
        .appendField(" y값: ")
        .appendField(new Blockly.FieldNumber(0, 0, 1), "y");
    this.appendDummyInput()
        .appendField("  화면출력")
        .appendField(new Blockly.FieldTextInput("문자열"), "content2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
