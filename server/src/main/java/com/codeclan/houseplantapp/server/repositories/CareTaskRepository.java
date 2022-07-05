package com.codeclan.houseplantapp.server.repositories;

import com.codeclan.houseplantapp.server.classes.CareTask;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareTaskRepository extends JpaRepository<CareTask,Long> {
}
