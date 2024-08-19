<?php

namespace App\Repository;

use App\Entity\ProjectSkill;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProjectSkill>
 *
 * @method ProjectSkill|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjectSkill|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjectSkill[]    findAll()
 * @method ProjectSkill[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectSkillRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProjectSkill::class);
    }

//    /**
//     * @return ProjectSkill[] Returns an array of ProjectSkill objects
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

//    public function findOneBySomeField($value): ?ProjectSkill
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
