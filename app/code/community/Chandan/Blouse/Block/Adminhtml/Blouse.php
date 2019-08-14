<?php
class Chandan_Blouse_Block_Adminhtml_Blouse extends Mage_Adminhtml_Block_Widget_Grid_Container
{
  public function __construct()
  {
    $this->_controller = 'adminhtml_blouse';
    $this->_blockGroup = 'blouse';
    $this->_headerText = Mage::helper('blouse')->__('Blouse Style Manager');
    $this->_addButtonLabel = Mage::helper('blouse')->__('Add Item');
    parent::__construct();
  }
}