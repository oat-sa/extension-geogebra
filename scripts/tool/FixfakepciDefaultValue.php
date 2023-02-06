<?php

namespace oat\geogebra\scripts\tool;

use League\Flysystem\Adapter\Local;
use oat\oatbox\action\Action;
use oat\geogebra\model\update\ItemFixfakepciDefaultValue;

/**
 * Class FixfakepciDefaultValue
 * Usage : sudo -u www-data php index.php 'oat\geogebra\scripts\tool\FixfakepciDefaultValue' run
 * @package oat\geogebra\scripts\tool
 */
class FixfakepciDefaultValue implements Action
{

    public function __invoke($params)
    {
        $run = false;
        if (!empty($params) && $params[0] === 'run') {
            $run = true;
        }

        \common_ext_ExtensionsManager::singleton()->getExtensionById('taoQtiItem');

        $dir = \taoItems_models_classes_ItemsService::singleton()->getDefaultItemDirectory();

        // maybe it's a dirty way but it's quicker. too much modification would have been required in ItemUpdater
        $adapter = $dir->getFileSystem()->getAdapter();
        if (!$adapter instanceof Local) {
            throw new \Exception(__CLASS__.' can only handle local files');
        }

        $itemUpdater = new ItemFixfakepciDefaultValue($adapter->getPathPrefix());
        $res = $itemUpdater->update($run);
        if ($run) {
            return \common_report_Report::createSuccess('Item fixed ' . count($res));
        } else {
            return \common_report_Report::createInfo('Item to be fixed ' . count($res));
        }
    }
}