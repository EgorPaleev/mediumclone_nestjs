import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'articles'})
export class ArticleEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    @Column()
    title: string;

    @Column({default: ''})
    desciption: string;

    @Column({default: ''})
    body: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updateAt: Date;

    @Column('simple-array')
    tagList: string[];

    @Column({default: 0})
    favoritesCount: number;

    @BeforeUpdate()
    updateTimestamp(){
        this.updateAt = new Date();
    }


}