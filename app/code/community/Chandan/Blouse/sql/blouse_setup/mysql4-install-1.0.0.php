<?php
$installer = $this;
$installer->startSetup();
$installer->run("
-- DROP TABLE IF EXISTS {$this->getTable('blouse')};
CREATE TABLE {$this->getTable('blouse')} (
  `blouse_id` int(11) unsigned NOT NULL auto_increment,
  `title` varchar(255) NOT NULL default '',
  `filename` varchar(255) NOT NULL default '',
  `content` text NOT NULL default '',
  `status` smallint(6) NOT NULL default '0',
  `created_time` datetime NULL,
  `update_time` datetime NULL,
  PRIMARY KEY (`blouse_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    ");
	
	
	
$setup = new Mage_Eav_Model_Entity_Setup('core_setup');
//category attribute
$setup->addAttribute('catalog_category', 'blouse_section', array(
    'group'             => 'General Information',
    'label'             => 'Blouse Section Display',
    'type'              => 'int',
    'input'             => 'select',
    'source'            => 'eav/entity_attribute_source_boolean',
    'visible'           => true,
    'required'          => false,
    'sort_order'        => 0,
    'backend'           => '',
    'frontend'          => '',
    'searchable'        => false,
    'filterable'        => false,
    'comparable'        => false,
    'user_defined'      => true,
    'visible_on_front'  => true,
    'wysiwyg_enabled'   => false,
    'is_html_allowed_on_front'    => false,
    'global'            => Mage_Catalog_Model_Resource_Eav_Attribute::SCOPE_STORE
));
//product attribute
$setup->addAttribute('catalog_product', 'blouse_section', array(
        'type'              => 'int',
        'backend_type'      => 'int',
        'backend'           => '',
        'frontend'          => '',
        'label'             => 'Blouse Section Display',
        'input'             => 'boolean',
        'frontend_class'    => '',
        'source'            => 'eav/entity_attribute_source_boolean',
        'global'            => Mage_Catalog_Model_Resource_Eav_Attribute::SCOPE_STORE,
        'visible'           => false,
        'required'          => false,
        'user_defined'      => true,
        'default'           => '',
        'searchable'        => false,
        'filterable'        => false,
        'comparable'        => false,
        'visible_on_front'  => false,
        'unique'            => false,
        'apply_to'          => '',
        'is_configurable'   => false
));
$setup->addAttributeToSet('catalog_product', 'Default', 'General', 'blouse_section');

	
	
	
	
	
$installer->endSetup(); 