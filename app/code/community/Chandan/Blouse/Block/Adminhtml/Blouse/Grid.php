<?php

class Chandan_Blouse_Block_Adminhtml_Blouse_Grid extends Mage_Adminhtml_Block_Widget_Grid
{
  public function __construct()
  {
      parent::__construct();
      $this->setId('blouseGrid');
      $this->setDefaultSort('blouse_id');
      $this->setDefaultDir('ASC');
      $this->setSaveParametersInSession(true);
  }

  protected function _prepareCollection()
  {
      $collection = Mage::getModel('blouse/blouse')->getCollection();
      $this->setCollection($collection);
      return parent::_prepareCollection();
  }

  protected function _prepareColumns()
  {
      $this->addColumn('blouse_id', array(
          'header'    => Mage::helper('blouse')->__('ID'),
          'align'     =>'right',
          'width'     => '50px',
          'index'     => 'blouse_id',
      ));

      $this->addColumn('title', array(
          'header'    => Mage::helper('blouse')->__('Blouse Style Title'),
          'align'     =>'left',
		  'width'     => '150px',
          'index'     => 'title',
      ));	  
	  	  	  
	 
	 $this->addColumn('filename', array(
          'header'    => Mage::helper('blouse')->__('Blouse Style Design'),
          'align'     =>'left',
          'index'     => 'filename',
		  'width'     => '100px',
          'renderer'  => 'blouse/adminhtml_blouse_renderer_image',
		  'attr1'     => 'value1',		  
      ));
	 
      $this->addColumn('content', array(
			'header'    => Mage::helper('blouse')->__('Blouse Style Description'),
			'width'     => '300px',
			'index'     => 'content',
      ));
	  

      $this->addColumn('status', array(
          'header'    => Mage::helper('blouse')->__('Status'),
          'align'     => 'left',
          'width'     => '80px',
          'index'     => 'status',
          'type'      => 'options',
          'options'   => array(
              1 => 'Enabled',
              2 => 'Disabled',
          ),
      ));
	  
        $this->addColumn('action',
            array(
                'header'    =>  Mage::helper('blouse')->__('Action'),
                'width'     => '100',
                'type'      => 'action',
                'getter'    => 'getId',
                'actions'   => array(
                    array(
                        'caption'   => Mage::helper('blouse')->__('Edit'),
                        'url'       => array('base'=> '*/*/edit'),
                        'field'     => 'id'
                    )
                ),
                'filter'    => false,
                'sortable'  => false,
                'index'     => 'stores',
                'is_system' => true,
        ));
		
		$this->addExportType('*/*/exportCsv', Mage::helper('blouse')->__('CSV'));
		$this->addExportType('*/*/exportXml', Mage::helper('blouse')->__('XML'));
	  
      return parent::_prepareColumns();
  }

    protected function _prepareMassaction()
    {
        $this->setMassactionIdField('blouse_id');
        $this->getMassactionBlock()->setFormFieldName('blouse');

        $this->getMassactionBlock()->addItem('delete', array(
             'label'    => Mage::helper('blouse')->__('Delete'),
             'url'      => $this->getUrl('*/*/massDelete'),
             'confirm'  => Mage::helper('blouse')->__('Are you sure?')
        ));

        $statuses = Mage::getSingleton('blouse/status')->getOptionArray();

        array_unshift($statuses, array('label'=>'', 'value'=>''));
        $this->getMassactionBlock()->addItem('status', array(
             'label'=> Mage::helper('blouse')->__('Change status'),
             'url'  => $this->getUrl('*/*/massStatus', array('_current'=>true)),
             'additional' => array(
                    'visibility' => array(
                         'name' => 'status',
                         'type' => 'select',
                         'class' => 'required-entry',
                         'label' => Mage::helper('blouse')->__('Status'),
                         'values' => $statuses
                     )
             )
        ));
        return $this;
    }

  public function getRowUrl($row)
  {
      return $this->getUrl('*/*/edit', array('id' => $row->getId()));
  }

}