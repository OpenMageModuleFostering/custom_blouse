<?php

class Chandan_Blouse_Model_Blouse extends Mage_Core_Model_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('blouse/blouse');
    }
}