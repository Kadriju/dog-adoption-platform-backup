
# adoption-platform
The platform aims to create Europe’s first centralized database and web page for all homeles & shelter dogs across Europe. The goal is to improve adoption rates, reduce shelter overcrowding, and  provide an accessible, multilingual adoption platform for potential adopters and animal shelters. 
[Europes_first_web_page_and_database_for_all_shelter_dogs_%26_cats_in_Europe.pdf](https://github.com/user-attachments/files/19050605/Europes_first_web_page_and_database_for_all_shelter_dogs_.26_cats_in_Europe.pdf)

This could radically increase adoption rates and animal welfare in Europe for shelter dogs and avoid long-term suffering in the shelters or being euthanized. Most people only look at the shelter webpages in their own country when they are looking to adopt a dog and if they don't find a perfect match then they buy a dog instead of adopting.

Transport and documents within Europe are very cheap and simple, it is really easy to move animals from one EU country to another by car, plane or ship. Also, there is an imbalance between western / northern Europe and eastern / south Europe. Eastern and southern Europe have many animals in their shelters but a lack of potential adopters while the western and northern Europe have few animals in shelters but a lot of potential adopters.

Having a central European webpage for all shelter animals in Europe would result in people being able to look at thousands of different dogs and cats and most likely find that perfect match for them - their new best friend, family member, fur-baby and in some cases, their soulmate.

For European dogs and cats to find their ideal home and for European homes to find their ideal pet.

Local shelters do not need to worry that this will result in fewer adoptions nationwide since people will always prefer to adopt an animal from a shelter close to them that they can meet before adoption. This option is meant to be the backup if people don't find an animal in a shelter close to them.

The front-end of the webpage The “start” page will present a simple and easy way of searching for a dog. The search criterias for dogs will be: sex, age, size, in all EU or a specific country.

Once a user clicks on a dog they will also see “more info” where the shelter writes any additional info about the animal (personality, history, special needs etc) and medical info (sterilized/castrated, vaccines). The user will also see which country and shelter the animal is located in (contact info) and a link to an interest form they can fill in that will automatically be sent to the shelter.

This structure also makes it possible for people to see all dogs in their country. National overviews of all shelter animals do not exist in most countries. So our webpage would cover the lack of an European webpage / database and also the lack of national webpages / databases.

On the upper menu that is located in the top part of the webpage horizontally there will be the choices: Start, Our mission, Donate, Useful info & links (transportation, documents, why shelter animals are a safe option etc) and Happy stories (success stories of adoptions).

At the top of the webpage there will also be language options. All European languages should be represented here. Language barriers should not stop people from adopting from another country. It would be ideal if we could offer a chat option on our webpage for the shelter and the adopter, similar to airbnb-s chat option where users can also choose the language they want to communicate in and then everything will be automatically translated into that language. Many European people are still not comfortable communicating in english.

Back-end and database

This project needs to use a relational database (which one is most fitted for this project?). We need to take into account that this database will most likely eventually store the information about thousands of dogs. Chat gpt recommends to use Postgre SQL - “We need to consider scalability, performance, and support for complex queries. A PostgreSQL database is an excellent choice for this project because it is robust, supports advanced search features, and handles large datasets efficiently.”

An example of the database design and architecture:

1. Animals Stores information about individual animals. Column Data Type Description animal_id SERIAL PRIMARY KEY Unique identifier for the animal. name VARCHAR(100) Name of the animal. species ENUM ('dog', 'cat') Whether the animal is a dog or cat. sex ENUM ('male', 'female') Gender of the animal. age SMALLINT Age in years. size ENUM ('small', 'medium', 'large') Size of the animal (only for dogs). descriptio n TEXT Additional info about the animal (e.g., personality, needs). medical_in fo TEXT Medical info (e.g., sterilized, vaccinations). status ENUM ('available', 'adopted', 'in treatment') Current status of the animal. shelter_id INT Foreign Key linking to the shelter where the animal is housed. created_at TIMESTAMP Record creation timestamp. 2. Shelters Stores information about shelters. Column Data Type Description shelter_id SERIAL PRIMARY KEY Unique identifier for the shelter. name VARCHAR(150) Name of the shelter. location VARCHAR(255) Full address of the shelter. country VARCHAR(100) Country where the shelter is located. contact_num ber VARCHAR(20) Shelter contact number. email VARCHAR(100) Shelter email address. interest_fo rm_url TEXT URL of the interest form for adoption inquiries.

3. Users Tracks visitors who fill out interest forms. Column Data Type Description user_id SERIAL PRIMARY KEY Unique identifier for the user. name VARCHAR(100) Name of the user. email VARCHAR(100) User's email address. phone VARCHAR(20) Contact number. message TEXT Message or inquiry from the user. animal_i d INT Foreign Key linking to the animal the inquiry is about.

4. Happy Stories Stores success stories about adoptions. Column Data Type Description story_id SERIAL PRIMARY KEY Unique identifier for the story. title VARCHAR(150) Title of the story. content TEXT The story content. image_url TEXT URL of an image related to the story. created_a t TIMESTAMP Timestamp of story creation.

Most likely this example needs to be developed more. The interest forms that the adopters fill out needs to be automatically sent out to the shelters : Interest Form Submission: when a user submits an interest form, it will be saved to the users table and optionally trigger an email to the shelter. Scalability Considerations:

Use indexes on frequently queried columns (species, sex, size, age).
Partition the animals table by species or country to handle large datasets efficiently.
Regularly archive old data (e.g., adopted animals). The goal is to have the webpage automated (automation) as much as possible to minimize the need for maintenance and administration. The goal is to only have tech support if the shelters have any technical issues.
Key Steps for Implementation in Real Systems:

Automated Processes: ○ Scheduled scripts for syncing data (e.g., cron jobs or cloud functions). ○ Automatic updates to the database from shelter-provided APIs or forms.
Error Handling: ○ Use centralized logging systems like ELK stack (Elasticsearch, Logstash, Kibana) or CloudWatch. ○ Alert administrators only when critical issues occur.
Self-Service for Shelters: ○ Build a dashboard with role-based access for shelters to manage their own data.
Minimal Tech Support: ○ Ensure the platform is well-documented with a robust FAQ section for shelter staff. ○ Automate responses for common technical queries using chatbots. This approach combines automation, robust error handling, and scalability to ensure the system operates with minimal manual intervention.
Webpage names: The following domain names are available for registering: www.petsofeurope.org or .eu www.dogsofeurope.org or.eu www.catsofeurope.org or .eu

This project aims to create a platform that connects people looking to adopt dogs with shelters and rescue organizations.

## Features

* Browse available dogs
* Filter by breed, age, etc.
* Contact shelters




