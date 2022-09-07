export class PostModel {
  ownerId!: String;
  content!: String;
  likesCount!: number;
  postedDate!: Date;
  imageURL!: String;

  public constructor(ownerId: String, content: String, likesCount: number, postedDate: Date, imageURL: String) {
    this.ownerId = ownerId;
    this.content = content;
    this.likesCount = likesCount;
    this.postedDate = postedDate;
    this.imageURL = imageURL;
  }
}
