<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
#[ApiResource]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $url = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE, options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeInterface $updatedAt = null;

    #[ORM\OneToMany(targetEntity: ProjectImage::class, mappedBy: 'projectID')]
    private Collection $projectImages;

    #[ORM\OneToMany(targetEntity: ProjectSkillAssociation::class, mappedBy: 'projectID')]
    private Collection $projectSkillAssociationsProjects;

    public function __construct()
    {
        $this->projectImages = new ArrayCollection();
        $this->projectSkillAssociationsProjects = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

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

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): static
    {
        $this->url = $url;

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
     * @return Collection<int, ProjectImage>
     */
    public function getProjectImages(): Collection
    {
        return $this->projectImages;
    }

    public function addProjectImage(ProjectImage $projectImage): static
    {
        if (!$this->projectImages->contains($projectImage)) {
            $this->projectImages->add($projectImage);
            $projectImage->setProjectID($this);
        }

        return $this;
    }

    public function removeProjectImage(ProjectImage $projectImage): static
    {
        if ($this->projectImages->removeElement($projectImage)) {
            // set the owning side to null (unless already changed)
            if ($projectImage->getProjectID() === $this) {
                $projectImage->setProjectID(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProjectSkillAssociation>
     */
    public function getprojectSkillAssociationsProjects(): Collection
    {
        return $this->projectSkillAssociationsProjects;
    }

    public function addProjectSkillAssociation(ProjectSkillAssociation $projectSkillAssociation): static
    {
        if (!$this->projectSkillAssociationsProjects->contains($projectSkillAssociation)) {
            $this->projectSkillAssociationsProjects->add($projectSkillAssociation);
            $projectSkillAssociation->setProject($this);
        }

        return $this;
    }

    public function removeProjectSkillAssociation(ProjectSkillAssociation $projectSkillAssociation): static
    {
        if ($this->projectSkillAssociationsProjects->removeElement($projectSkillAssociation)) {
            // set the owning side to null (unless already changed)
            if ($projectSkillAssociation->getProject() === $this) {
                $projectSkillAssociation->setProject(null);
            }
        }

        return $this;
    }



}
