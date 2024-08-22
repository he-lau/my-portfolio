<?php

namespace App\DataFixtures;

use App\Entity\Experience;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use DateTime;
use DateTimeImmutable;

class ExperienceFixtures extends Fixture
{
    private $experiences = [
        [
            'job_title' => 'Développeur web (stage)',
            'company'=>'Opinaka',
            'start_date'=>'08/06/2020',
            'end_date'=>'20/07/2020',
            'description'=>'Intégration de présentation web & création de plugins Grafana'
        ],
        [
            'job_title' => 'Développeur web (stage)',
            'company'=>'Université Paris 8',
            'start_date'=>'16/06/2022',
            'end_date'=>'02/09/2022',
            'description'=>'Refonte du site web de l\'UFR de psychologie de l\'université Paris 8 dans le cadre de mon stage de L3.<br>
            '
        ],
        [
            'job_title' => 'Développeur web Full stack (stage)',
            'company'=>'Legal Express',
            'start_date'=>'17/04/2023',
            'end_date'=>'17/09/2023',
            'description'=>'Correction et amélioration du back-office'
        ],
        [
            'job_title' => 'Développeur web Full stack (alternance)',
            'company'=>'Legal Express',
            'start_date'=>'19/09/2023',
            'end_date'=>'',
            'description'=>'Correction et amélioration du back-office'
        ]
    ];

    public function load(ObjectManager $manager): void
    {

        foreach($this->experiences as $experience) {

            $experienceInstance = new Experience();
            $experienceInstance->setJobTitle($experience['job_title']);
            $experienceInstance->setCompany(($experience['company']));

            $startDate = \DateTime::createFromFormat('d/m/Y', $experience['start_date']);
            $endDate = $experience['end_date'] ? \DateTime::createFromFormat('d/m/Y', $experience['end_date']) : null;
            
            $experienceInstance->setStartDate($startDate);
            $experienceInstance->setEndDate($endDate);

            $experienceInstance->setDescription($experience['description']);

            $experienceInstance->setCreatedAt(new DateTimeImmutable('now'));
            $experienceInstance->setUpdatedAt(new DateTime('now'));
            
            $manager->persist($experienceInstance);
        }

        $manager->flush();
    }
}
