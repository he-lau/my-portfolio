<?php

namespace App\DataFixtures;

use App\Entity\Skill;
use App\Entity\ProjectSkillAssociation;

use DateTime;
use DateTimeImmutable;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SkillFixtures extends Fixture
{
    private $skills = [
        'HTML'=>'',
        'CSS'=>'',
        'JavaScript'=>'',
        'PHP'=>'',
        'Python'=>'',
        'Java'=>'',
        'C'=>'',
        'SQL'=>'',
        'React'=>'',
        'Symfony'=>'',
        'Bootstrap'=>'',
        'WordPress'=>''
    ];

    public function load(ObjectManager $manager): void
    {

        $i=0;

        foreach($this->skills as $skillName => $skillDesciption) {
            $skill = new Skill();
            $skill->setName($skillName);
            $skill->setDescription($skillDesciption);
            $skill->setCreatedAt(new DateTimeImmutable('now'));
            $skill->setUpdatedAt(new DateTime('now'));

            $manager->persist($skill);

            // Définir une référence pour pouvoir utiliser cette entité dans d'autres fixtures
            $this->addReference($skillName, $skill);
            //$this->addReference('skill_' . $i, $skill);

            $i++;
        }

        $project0 = $this->getReference('project_0');
        $skillReact = $this->getReference('React'); 
        $skillSymfony = $this->getReference('Symfony');
        
        $project0Association = new ProjectSkillAssociation($project0,$skillReact);
        $manager->persist($project0Association);
        $project0Association = new ProjectSkillAssociation($project0,$skillSymfony);
        $manager->persist($project0Association);

        $manager->flush();
    }

    public function getDependencies() {
        return array(
            ProjectFixtures::class
        );
    }
}
