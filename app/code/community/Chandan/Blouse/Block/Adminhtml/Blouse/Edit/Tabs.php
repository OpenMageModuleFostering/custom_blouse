<?php

class Chandan_Blouse_Block_Adminhtml_Blouse_Edit_Tabs extends Mage_Adminhtml_Block_Widget_Tabs
{

  public function __construct()
  {
      parent::__construct();
      $this->setId('blouse_tabs');
      $this->setDestElementId('edit_form');
      $this->setTitle(Mage::helper('blouse')->__('Blouse Style Information'));
  }

  protected function _beforeToHtml()
  {
      $this->addTab('form_section', array(
          'label'     => Mage::helper('blouse')->__('Blouse Style Information'),
          'title'     => Mage::helper('blouse')->__('Blouse Style Information'),
          'content'   => $this->getLayout()->createBlock('blouse/adminhtml_blouse_edit_tab_form')->toHtml(),
      ));
     
      return parent::_beforeToHtml();
  }
}