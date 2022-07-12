package com.codeclan.houseplantapp.server;

import com.codeclan.houseplantapp.server.classes.CareTask;
import com.codeclan.houseplantapp.server.repositories.CareTaskRepository;
import com.codeclan.houseplantapp.server.repositories.PlantRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest

class ServerApplicationTests {

	@Autowired
	CareTaskRepository careTaskRepository;

	@Autowired
	CareTaskRepository plantRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canFindAllTasksByPlantId () {
		List<CareTask> found = careTaskRepository.findByPlant_Id(2L);
		assertEquals(2, found.size());
		assertEquals("Water plant", found.get(0).getTitle());
	}

	@Test
	public void canDeleteByPlantId () {
		careTaskRepository.deleteByPlantId(14L);
		List<CareTask> found = careTaskRepository.findByPlant_Id(14L);
		assertEquals(0, found.size());
	}
}