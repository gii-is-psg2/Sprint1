package org.springframework.samples.petclinic.petHotelRoom;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PetHotelRoomRepository extends CrudRepository<PetHotelRoom, Integer>{
    
    @Query("SELECT ph FROM PetHotelRoom ph WHERE ph.clinicOwner.user.id = :userId")
    List<PetHotelRoom> findPetHotelRoomsByUserId(int userId);
}
