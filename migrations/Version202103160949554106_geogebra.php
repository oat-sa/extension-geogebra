<?php

declare(strict_types=1);

namespace oat\geogebra\migrations;

use Doctrine\DBAL\Schema\Schema;
use oat\tao\scripts\tools\migrations\AbstractMigration;
use Doctrine\Migrations\Exception\IrreversibleMigration;
use oat\qtiItemPci\model\PciModel;
use oat\geogebra\scripts\install\RegisterPciGeogebraIMS;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version202103160949554106_geogebra extends AbstractMigration
{

    public function getDescription(): string
    {
        return 'Convert GeoGebra interaction to IMS compliant';
    }

    public function up(Schema $schema): void
    {
        $registry = (new PciModel())->getRegistry();
        if ($registry->has('GGBPCI')) {
            /** @noinspection PhpUnhandledExceptionInspection */
            $registry->removeAllVersions('GGBPCI');
        }

        $this->addReport(
            $this->propagate(
                new RegisterPciGeogebraIMS()
            )(
                ['1.0.0']
            )
        );
    }

    public function down(Schema $schema): void
    {
        throw new IrreversibleMigration(
            'In order to undo this migration, please revert the client-side changes and run ' . RegisterPciGeogebraIMS::class
        );
    }
}
