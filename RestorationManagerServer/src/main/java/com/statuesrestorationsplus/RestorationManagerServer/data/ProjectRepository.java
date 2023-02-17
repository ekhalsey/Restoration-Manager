package com.statuesrestorationsplus.RestorationManagerServer.data;

import com.statuesrestorationsplus.RestorationManagerServer.models.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Integer> {
}
