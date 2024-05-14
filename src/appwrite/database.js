import  config  from "@/config/config";
import { Client, Databases,Storage,Query, ID  } from "appwrite";

// here we are using appwrite sdk to interact with appwrite services
// I have created a class DatabaseService to interact with appwrite services and also created methods as per requirements
// finally exported an object of the class on which these methods can be called.

export class DatabaseService{

    client = new Client();
    databases;
    storageBanner


    // setup of client and database is done under constructor so that, when the object is created only then the client and database will setup.
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storageBanner = new Storage(this.client);
    }

    // method to fetch all coursesIds related to a particular batch
    async getCourses(batchId){
        try {
            const result = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteBatchesCollectionId,
                [Query.equal("Batch_Number", batchId)]
            );
            return result.documents
        } catch (error) {
            console.error("Appwrite service :: getCourses :: error", error);
            return false;

        }
    }
    // methods to get course details form its id
    async getCoursedetail(courseId){
        try {
            const result = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCoursesCollectionId,
                [Query.equal("id", courseId)]
            );
            return result.documents
        } catch (error) {
            console.error("Appwrite service :: getCoursesdetails :: error", error);
            return false;

        }
    }

    //method to fetch all banners from appwrite database
    async getBanners(){
        try {
 
            const result = await this.storageBanner.listFiles(
                config.appwriteBannerBucketId
            );
            return result.files
        } catch (error) {
            console.error("Appwrite service :: getBanners :: error", error);
            return false;

        }
    }


    // method to get image of a particular file id
     getImageView(fileid){
        try{
            const result =  this.storageBanner.getFileView(
               config.appwriteBannerBucketId, fileid) ;
               return result.toString();
        }catch (error) {
            console.error("Appwrite service :: getImageView :: error", error);
            return false;

        }
    }

    // method to send doubts to db

    async createCourseQueryDocument(className, phoneNo, name, query, batch) {
        try {
            let phone = parseInt(phoneNo);
            const result = await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCourseQueryId,
                ID.unique(),
                {
                    class: className,
                    phoneNo: phone,
                    Name: name,
                    query: query,
                    Batch: batch,
                }
            );
           
        } catch (error) {
            console.error("Appwrite service :: createCourseQueryDocument :: error", error);
            return false;
        }
    }

}



const service = new DatabaseService();
export default service;