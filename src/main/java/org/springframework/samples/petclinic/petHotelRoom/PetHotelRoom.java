package org.springframework.samples.petclinic.petHotelRoom;

import jakarta.persistence.*;
import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.clinicowner.ClinicOwner;
import org.springframework.samples.petclinic.model.NamedEntity;
import org.springframework.samples.petclinic.pet.PetType;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "petHotelRooms")
public class PetHotelRoom extends NamedEntity{

    @NotNull
    @Column(name = "size")
    private int size;

    @ManyToOne
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private PetType type;

    @ManyToOne
	@JoinColumn(name = "clinic_owner", referencedColumnName = "id")
	private ClinicOwner clinicOwner;

    @ManyToOne
	@JoinColumn(name = "clinic", referencedColumnName = "id")
	private Clinic clinic;
}
