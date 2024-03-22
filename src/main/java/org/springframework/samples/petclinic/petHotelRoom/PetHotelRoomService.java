package org.springframework.samples.petclinic.petHotelRoom;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PetHotelRoomService {
    private PetHotelRoomRepository petHotelRoomRepository;

    @Autowired
	public PetHotelRoomService(PetHotelRoomRepository petHotelRoomRepository) {
		this.petHotelRoomRepository = petHotelRoomRepository;
	}

	@Transactional(readOnly = true)
	public List<PetHotelRoom> findAll() throws DataAccessException {
		
		return (List<PetHotelRoom>) petHotelRoomRepository.findAll();
	}

	@Transactional(readOnly = true)
	public List<PetHotelRoom> findPetHotelRoomsByUserId(int userId) throws DataAccessException {
		return petHotelRoomRepository.findPetHotelRoomsByUserId(userId);
	}

	@Transactional(readOnly = true)
	public PetHotelRoom findPetHotelRoomById(int petHotelRoomId) throws DataAccessException {
		
		Optional<PetHotelRoom> petHotelRoom = petHotelRoomRepository.findById(petHotelRoomId);
		
		if(petHotelRoom.isPresent()) {
			return petHotelRoom.get();
		}else{
			return null;
		}
	}

    @Transactional
	public PetHotelRoom save(PetHotelRoom petHotelRoom) throws DataAccessException {
		petHotelRoomRepository.save(petHotelRoom);
		return petHotelRoom;
	}

	
	@Transactional
	public PetHotelRoom update(PetHotelRoom petHotelRoom, int petHotelRoomId) throws DataAccessException {
		
		PetHotelRoom petHotelRoomToUpdate = petHotelRoomRepository.findById(petHotelRoomId).get();
		if (petHotelRoom.getClinicOwner() != null){
			BeanUtils.copyProperties(petHotelRoom, petHotelRoomToUpdate, "id", "clinicOwner", "owners");
		}

		return save(petHotelRoomToUpdate);
	}

	@Transactional
	public void delete(int petHotelRoomId) throws DataAccessException {
		petHotelRoomRepository.deleteById(petHotelRoomId);
	}
    
}
