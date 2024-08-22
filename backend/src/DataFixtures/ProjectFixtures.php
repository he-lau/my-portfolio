<?php

namespace App\DataFixtures;

use App\Entity\Project;

use DateTimeImmutable;
use DateTime;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProjectFixtures extends Fixture
{
    private $projects = [
        [
            "title"=>"Portfolio",
            "description"=>"Portfolio avec React et Symfony."
        ],
        [
            "title"=>"Projet composants embarqués",
            "description"=>"Prise en main de la carte Carte de développement MikroElektronika EasyPIC V7"
        ],
        [
            "title"=>"Velib cartography",
            "description"=>""
        ],
        [
            "title"=>"Logiciel de dessin",
            "description"=>""
        ], 
        [
            "title"=>" Extraction de liens & graphe lié",
            "description"=>""
        ],          
        [
            "title"=>"Othello",
            "description"=>""
        ],
        [
            "title"=>"Système de recommandation de série anime",
            "description"=>""
        ],                                                
    ];

    public function load(ObjectManager $manager): void
    {

        $i = 0;

        foreach($this->projects as $project) {
            $projectInstance = new Project();
            $projectInstance->setTitle($project['title']);
            $projectInstance->setDescription($project['description']);
            $projectInstance->setCreatedAt(new DateTimeImmutable('now'));
            $projectInstance->setUpdatedAt(new DateTime('now'));
    
            $manager->persist($projectInstance);

            //$this->addReference('poject_' . $project['title'], $projectInstance);
            $this->addReference('project_' . $i, $projectInstance);

            $i++;
        }

        $manager->flush();

    }
}
