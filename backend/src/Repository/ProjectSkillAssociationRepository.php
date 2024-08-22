<?php

namespace App\Repository;

use App\Entity\ProjectSkillAssociation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProjectSkillAssociation>
 *
 * @method ProjectSkillAssociation|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjectSkillAssociation|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjectSkillAssociation[]    findAll()
 * @method ProjectSkillAssociation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectSkillAssociationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjectSkillAssociation::class);
    }

//    /**
//     * @return ProjectSkillAssociation[] Returns an array of ProjectSkillAssociation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ProjectSkillAssociation
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
