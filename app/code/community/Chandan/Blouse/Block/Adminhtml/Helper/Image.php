<?php
class Chandan_Blouse_Block_Adminhtml_Helper_Image extends Varien_Data_Form_Element_Image
{
  protected function _getUrl(){
        $url = false;
        if ($this->getValue()) {
            $url = Mage::getBaseUrl('media').'blouse/'.$this->getValue();
        }
        return $url;
    }
}