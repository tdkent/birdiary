export type Sighting = {
	sight_id: number;
	diary_id: number;
	bird_name: string;
	location_name: string;
	sight_date: Date;
	is_new: boolean;
	description: string;
};
