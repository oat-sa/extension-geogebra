<?php

declare(strict_types=1);

namespace oat\geogebra\migrations;

use Doctrine\DBAL\Schema\Schema;
use oat\tao\scripts\tools\migrations\AbstractMigration;
use Doctrine\Migrations\Exception\IrreversibleMigration;
use oat\geogebra\scripts\install\RegisterPciGeogebraIMS;

/**
 * phpcs:disable Squiz.Classes.ValidClassName
 */
final class Version202409200641503559_geogebra extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addReport(
            $this->propagate(
                new RegisterPciGeogebraIMS()
            )(
                ['1.2.2']
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
