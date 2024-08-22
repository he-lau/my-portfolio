<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\SkillRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SkillRepository::class)]
#[ApiResource]
class Skill
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE,options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(targetEntity: ProjectSkillAssociation::class, mappedBy: 'SkillID')]
    private Collection $projectSkillAssociationsSkills;

    public function __construct()
    {
        $this->projectSkillAssociationsSkills = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection<int, ProjectSkillAssociation>
     */
    public function getprojectSkillAssociationsSkills(): Collection
    {
        return $this->projectSkillAssociationsSkills;
    }

    public function addProjectSkillAssociation(ProjectSkillAssociation $projectSkillAssociation): static
    {
        if (!$this->projectSkillAssociationsSkills->contains($projectSkillAssociation)) {
            $this->projectSkillAssociationsSkills->add($projectSkillAssociation);
            $projectSkillAssociation->setSkill($this);
        }

        return $this;
    }

    public function removeProjectSkillAssociation(ProjectSkillAssociation $projectSkillAssociation): static
    {
        if ($this->projectSkillAssociationsSkills->removeElement($projectSkillAssociation)) {
            // set the owning side to null (unless already changed)
            if ($projectSkillAssociation->getSkill() === $this) {
                $projectSkillAssociation->setSkill(null);
            }
        }

        return $this;
    }

}
