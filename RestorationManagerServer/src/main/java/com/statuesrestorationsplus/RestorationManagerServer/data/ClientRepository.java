package com.statuesrestorationsplus.RestorationManagerServer.data;

import com.statuesrestorationsplus.RestorationManagerServer.models.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client, Integer> {
}
