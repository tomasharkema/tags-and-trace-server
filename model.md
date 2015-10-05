- Incident
	- _id (ObjectID)
	- UUID (String)
	- name (String)
	- fromDate (Date)
	- active (Boolean)
	- location (Object)
		- lat (Double)
		- lon (Double)
//	- workflowsettings (Map<Option, Boolean>)

-> Incident publication: "incidents"

- FieldAgent
	- incident (Incident)

- Location
	- lat (Double)
	- lon (Double)
	- agent (FieldAgent)
	- date (Date)

- Tag
	- initialFieldAgent (FieldAgent)
	- UUID (String)
	- location
		- lat
		- lon
	- taggedDate (Date)
	- data (Array<TagInformation>)

- TagInformation
	- to be defined