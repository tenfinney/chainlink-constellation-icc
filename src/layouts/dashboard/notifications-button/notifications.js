import { subDays, subHours } from 'date-fns';
const now = new Date();
export const notifications = [
{
id: '5e8883f1b51cc1956a5a1ec0',
author: '5e88...1ec0 3',
avatar: '/assets/avatars/avatar-jie-yan-song.png',
createdAt: subHours(now, 2).getTime(),
job: 'Dev: Smart-Contracts',
read: true,
type: 'job_add'
},
{
id: 'bfb21a370c017acc416757c7',
author: 'bfb2...57c7',
avatar: '/assets/avatars/avatar-jie-yan-song.png',
createdAt: subHours(now, 2).getTime(),
job: 'Dev: JS Frontend ',
read: false,
type: 'job_add'
},
{
id: '20d9df4f23fff19668d7031c',
author: '20d9...031c',
avatar: '/assets/avatars/avatar-jie-yan-song.png',
createdAt: subDays(now, 1).getTime(),
job: 'Dev: Backend DB Firebase ',
read: true,
type: 'job_add'
},
// {
//     id: '20d9df4f23fff19668d7031c',
//     author: '5e88...1ec0 3',
//     createdAt: subDays(now, 1).getTime(),
//     description: 'Dev: Firebase Backend',
//     job: 'Dev: Backend DB Firebase ',
//     read: true,
//     type: 'new_feature'
//     },
{
id: 'fca083fca0e8612044248ecf',
author: 'fca0...8ecf',
avatar: '/assets/avatars/avatar-jie-yan-song.png',
createdAt: subHours(now, 2).getTime(),
job: 'Dev: Backend DB Firebase ',
read: false,
type: 'job_add'
}
];
