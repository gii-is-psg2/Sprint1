package org.springframework.samples.petclinic.petHotelRoom;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.auth.payload.response.MessageResponse;
import org.springframework.samples.petclinic.clinicowner.ClinicOwner;
import org.springframework.samples.petclinic.clinicowner.ClinicOwnerService;
import org.springframework.samples.petclinic.user.UserService;
import org.springframework.samples.petclinic.util.RestPreconditions;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/petHotelRooms")
@Tag(name = "PetHotelRooms", description = "The PetHotelRooms managemet API")
@SecurityRequirement(name = "bearerAuth")
public class PetHotelRoomController {
    private final PetHotelRoomService petHotelRoomService;
    private final UserService userService;
    private final ClinicOwnerService clinicOwnerService;

    @Autowired
	public PetHotelRoomController(PetHotelRoomService petHotelRoomService, UserService userService, 
    ClinicOwnerService clinicOwnerService) {
		this.petHotelRoomService = petHotelRoomService;
        this.userService= userService;
        this.clinicOwnerService= clinicOwnerService;
	}

	@GetMapping
	public ResponseEntity<List<PetHotelRoom>> findAllPetHotelRooms(@RequestParam(required = false) Integer userId) {
		
		if (userId != null) {
			return new ResponseEntity<>(petHotelRoomService.findPetHotelRoomsByUserId(userId), HttpStatus.OK);
		}

		return new ResponseEntity<>(petHotelRoomService.findAll(), HttpStatus.OK);
	}

    @GetMapping(value = "{petHotelRoomId}")
	public ResponseEntity<PetHotelRoom> findClinicById(@PathVariable("petHotelRoomId") int petHotelRoomId) {
		return new ResponseEntity<>(petHotelRoomService.findPetHotelRoomById(petHotelRoomId), HttpStatus.OK);
	}

    @PostMapping
	public ResponseEntity<PetHotelRoom> createPetHotelRoom(@RequestBody @Valid PetHotelRoom petHotelRoom) {

		PetHotelRoom newPetHotelRoom = new PetHotelRoom();
		BeanUtils.copyProperties(petHotelRoom, newPetHotelRoom, "id");
		if(petHotelRoom.getClinicOwner() == null){
			ClinicOwner owner = clinicOwnerService.findByUserId(userService.findCurrentUser().getId());
			newPetHotelRoom.setClinicOwner(owner);
		}


		return new ResponseEntity<>(petHotelRoomService.save(newPetHotelRoom), HttpStatus.CREATED);
	}

    @PutMapping(value = "{petHotelRoomId}")
	public ResponseEntity<PetHotelRoom> updateClinic(@PathVariable("petHotelRoomId") int petHotelRoomId,
			@RequestBody @Valid PetHotelRoom petHotelRoom) {
		RestPreconditions.checkNotNull(petHotelRoomService.findPetHotelRoomById(petHotelRoomId), "Clinic", "ID", petHotelRoomId);

		return new ResponseEntity<>(petHotelRoomService.update(petHotelRoom, petHotelRoomId), HttpStatus.OK);
	}

	@DeleteMapping(value = "{petHotelRoomId}")
	public ResponseEntity<MessageResponse> deleteClinic(@PathVariable("petHotelRoomId") int petHotelRoomId) {
		RestPreconditions.checkNotNull(petHotelRoomService.findPetHotelRoomById(petHotelRoomId), "Clinic", "ID", petHotelRoomId);
		petHotelRoomService.delete(petHotelRoomId);
		return new ResponseEntity<>(new MessageResponse("Clinic deleted!"), HttpStatus.OK);
	}
    
}
