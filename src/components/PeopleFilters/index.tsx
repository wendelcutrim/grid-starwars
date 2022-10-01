import FormFilters from "../FormFilters";
import GenderFilter from "./GenderFilter";
import HairColorFilter from "./HairColorFilter";
import BirthYearFilter from "./BirthYearFilter";

interface PeopleFiltersProps {
  genderArray: any;
  hairColorArray: any;
  birthYearArray: any;

  eventGender: any;
  eventHairColor: any;
  eventBirthYear: any;
}

function PeopleFilters(props: PeopleFiltersProps) {
  return (
    <FormFilters>
      <GenderFilter genders={props.genderArray} handleGender={props.eventGender} labelName="Gender" />
      <HairColorFilter hairColorArray={props.hairColorArray} handleHairColor={props.eventHairColor} labelName="Hair Color" />
      <BirthYearFilter birthYearArray={props.birthYearArray} handleBirthYear={props.eventBirthYear} labelName="Birth Year" />
    </FormFilters>
  )
}

export default PeopleFilters