<?php

namespace App\Entity;

use App\Repository\ProjectSkillAssociationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectSkillAssociationRepository::class)]
class ProjectSkillAssociation
{

    #[ORM\Id,ORM\ManyToOne(inversedBy: 'projectSkillAssociationsProjects', cascade: ['persist'])]
    private ?Project $project = null;

    #[ORM\Id,ORM\ManyToOne(inversedBy: 'projectSkillAssociationsSkills', cascade: ['persist'])]
    private ?Skill $skill = null;

    public function __construct(Project $project, Skill $skill)
    {
        $this->project = $project;
        $this->skill = $skill;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): static
    {
        $this->project = $project;

        return $this;
    }

    public function getSkill(): ?Skill
    {
        return $this->skill;
    }

    public function setSkill(?Skill $skill): static
    {
        $this->skill = $skill;

        return $this;
    }
}
