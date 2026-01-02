import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TrainingProgram } from './training.program.entity';
import { Submission } from './submissions.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'date', nullable: true })
  deadline: Date;

  @ManyToOne(() => TrainingProgram, (tp) => tp.tasks)
  trainingProgram: TrainingProgram;

  @OneToMany(() => Submission, (submission) => submission.task)
  submissions: Submission[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
