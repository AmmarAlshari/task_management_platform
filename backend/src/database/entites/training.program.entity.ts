import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Task } from './tasks.entity';
import { Enrollment } from './enrollments.entity';

@Entity('training_programs')
export class TrainingProgram {
  @PrimaryGeneratedColumn()
  tp_id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.trainingPrograms)
  createdBy: User;

  @OneToMany(() => Task, (task) => task.trainingProgram)
  tasks: Task[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.trainingProgram)
  enrollments: Enrollment[];

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
