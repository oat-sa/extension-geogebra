<?php

declare(strict_types=1);

namespace oat\geogebra\migrations;

use Doctrine\DBAL\Schema\Schema;
use oat\tao\scripts\tools\migrations\AbstractMigration;
use Doctrine\Migrations\Exception\IrreversibleMigration;
use oat\qtiItemPci\model\IMSPciModel;
use oat\geogebra\scripts\install\RegisterPciGeogebraIMS;

/**
 * Auto-generated Migration: Please modify to your needs!
 *
 * phpcs:disable Squiz.Classes.ValidClassName
 */
final class Version202411131408443559_geogebra extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Install/update PCI GGBPCI';
    }

    public function up(Schema $schema): void
    {
        $registry = (new IMSPciModel())->getRegistry();
        $this->addReport(
            $this->propagate(
                new RegisterPciGeogebraIMS()
            )(
                ['1.2.4']
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
