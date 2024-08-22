<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240819144550 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE project_skill_association (id INT AUTO_INCREMENT NOT NULL, project_id INT DEFAULT NULL, skill_id INT DEFAULT NULL, INDEX IDX_7748E43F166D1F9C (project_id), INDEX IDX_7748E43F5585C142 (skill_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE project_skill_association ADD CONSTRAINT FK_7748E43F166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE project_skill_association ADD CONSTRAINT FK_7748E43F5585C142 FOREIGN KEY (skill_id) REFERENCES skill (id)');
        $this->addSql('DROP TABLE project_skill');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE project_skill (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE project_skill_association DROP FOREIGN KEY FK_7748E43F166D1F9C');
        $this->addSql('ALTER TABLE project_skill_association DROP FOREIGN KEY FK_7748E43F5585C142');
        $this->addSql('DROP TABLE project_skill_association');
    }
}
