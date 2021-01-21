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

Blockly.Blocks['illuminance_analog'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.appendDummyInput();
    this.appendDummyInput()
        .appendField("조도센서 ")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }));

    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_ANALOGREAD)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffc93c");
    this.setTooltip("조도 센서 블럭입니다.");
    this.setHelpUrl("");
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};

Blockly.Blocks['illuminance_digital'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("C:/Users/BP 김현지/Desktop/진행/새 폴더/새 폴더/blockly_test/ardublockly/test/1.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("조도센서 ")
        .appendField(new Blockly.FieldImage("C:/Users/BP 김현지/Desktop/진행/새 폴더/새 폴더/blockly_test/ardublockly/test/1.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        //한줄에 이미지 두개 추가 안됌 첫째줄에 센서 이미지 , 둘째줄에 색인 이미지
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DIGITALREAD)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ffc93c");
    this.setTooltip("조도 센서 블럭입니다.");
    this.setHelpUrl("");
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'PIN', 'digitalPins');
  }
};
