package com.codeclan.houseplantapp.server.repositories;

import com.codeclan.houseplantapp.server.classes.CareTask;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

public interface CareTaskRepository extends JpaRepository<CareTask,Long> {

    // get all tasks and sort them by start date, then by id
    List<CareTask> findByOrderByStartDescIdDesc();

    @Query("select c from CareTask c where c.completed = ?1 order by c.start DESC")
    List<CareTask> findByCompletedOrderByStartDesc(boolean completed);

    @Query("select c from CareTask c where c.start = ?1 order by c.id DESC")
    List<CareTask> findByStartOrderByIdDesc(LocalDate start);

    @Query(value = "select * from care_tasks where completed = false and task_start < ?1 ORDER BY task_start DESC, id DESC", nativeQuery = true)
    List<CareTask> findByCompletedFalseAndStartLessThanOrderByStartDescIdDesc(LocalDate start);

    @Query("select c from CareTask c where c.plant.id = ?1")
    List<CareTask> findByPlant_Id(Long id);

    @Transactional
    @Modifying
    @Query(value = "delete from care_tasks where plant_id = ?1", nativeQuery = true)
    void deleteByPlantId(Long id);

}