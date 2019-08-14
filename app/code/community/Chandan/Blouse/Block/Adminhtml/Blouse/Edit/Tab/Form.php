<?php

class Chandan_Blouse_Block_Adminhtml_Blouse_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
  protected function _prepareForm()
  {
      $form = new Varien_Data_Form();
      $this->setForm($form);
      $fieldset = $form->addFieldset('blouse_form', array('legend'=>Mage::helper('blouse')->__('Blouse Style information')));
     $fieldset->addType('image', 'Chandan_Blouse_Block_Adminhtml_Helper_Image');
      $fieldset->addField('title', 'text', array(
          'label'     => Mage::helper('blouse')->__('Blouse Style Title'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'title',
      ));

      $fieldset->addField('filename', 'image', array(
		'label'     => Mage::helper('blouse')->__('Blouse Style Design'),
		'required'  => true,
		'class'     => 'required-entry',
		'name'      => 'filename',
	  ));
		
      $fieldset->addField('status', 'select', array(
          'label'     => Mage::helper('blouse')->__('Status'),
          'name'      => 'status',
          'values'    => array(
              array(
                  'value'     => 1,
                  'label'     => Mage::helper('blouse')->__('Enabled'),
              ),

              array(
                  'value'     => 2,
                  'label'     => Mage::helper('blouse')->__('Disabled'),
              ),
          ),
      ));
     
      $fieldset->addField('content', 'editor', array(
          'name'      => 'content',
          'label'     => Mage::helper('blouse')->__('Blouse Style Description'),
          'title'     => Mage::helper('blouse')->__('Blouse Style Description'),          
          'wysiwyg'   => false,
          'required'  => false,
      ));
     
      if ( Mage::getSingleton('adminhtml/session')->getBlouseData() )
      {
          $form->setValues(Mage::getSingleton('adminhtml/session')->getBlouseData());
          Mage::getSingleton('adminhtml/session')->setBlouseData(null);
      } elseif ( Mage::registry('blouse_data') ) {
          $form->setValues(Mage::registry('blouse_data')->getData());
      }
      return parent::_prepareForm();
  }
}