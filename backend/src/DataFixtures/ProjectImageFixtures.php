<?php

namespace App\DataFixtures;

use App\Entity\ProjectImage;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use DateTime;
use DateTimeImmutable;

class ProjectImageFixtures extends Fixture
{

    private $imageDirectory = '/uploads/images';
    private $images = [
        'project_1' => [
            'easypicv7.jpeg'
        ] 
    ];


    public function load(ObjectManager $manager): void
    {

        foreach ($this->images as $projectReference => $imageFilenames) {

            $project = $this->getReference($projectReference);

            foreach ($imageFilenames as $filename) {
                // Créer et persister l'entité ProjectImage
                $projectImage = new ProjectImage();
                $projectImage->setFilePath($this->imageDirectory.$filename);
                $projectImage->setProjectID($project);

                $projectImage->setCreatedAt(new DateTimeImmutable('now'));
                $projectImage->setUpdatedAt(new DateTime('now'));

                $manager->persist($projectImage);
            }
        }

        $manager->flush();
    }

    public function getDependencies() {
        return array(
            ProjectFixtures::class
        );
    }
}
