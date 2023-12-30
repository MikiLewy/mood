import { createNewUser } from '@/actions/user';

const NewUserPage = async () => {
  await createNewUser();

  return <div>Loading...</div>;
};

export default NewUserPage;
