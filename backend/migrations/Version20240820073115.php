<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240820073115 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE experience CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('DROP INDEX UNIQ_7748E43F166D1F9C5585C142 ON project_skill_association');
        $this->addSql('ALTER TABLE project_skill_association ADD id INT AUTO_INCREMENT NOT NULL, CHANGE project_id project_id INT DEFAULT NULL, CHANGE skill_id skill_id INT DEFAULT NULL, ADD PRIMARY KEY (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE experience CHANGE updated_at updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL');
        $this->addSql('ALTER TABLE project_skill_association MODIFY id INT NOT NULL');
        $this->addSql('DROP INDEX `primary` ON project_skill_association');
        $this->addSql('ALTER TABLE project_skill_association DROP id, CHANGE project_id project_id INT NOT NULL, CHANGE skill_id skill_id INT NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_7748E43F166D1F9C5585C142 ON project_skill_association (project_id, skill_id)');
    }
}
