import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchAccounts, createAccount, updateAccount, deleteAccount } from '../store';

const Account: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items: accounts, status, error } = useSelector((state: RootState) => state.accounts);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  const handleCreate = () => {
    const newAccount = { name: 'New Account', balance: 1000 };
    dispatch(createAccount(newAccount));
  };

  const handleUpdate = (id: number) => {
    const updatedAccount = { name: 'Updated Account', balance: 2000 };
    dispatch(updateAccount({ id, account: updatedAccount }));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteAccount(id));
  };

  return (
    <div>
      <h1>Accounts</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <button onClick={handleCreate}>Create Account</button>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - ${account.balance}
            <button onClick={() => handleUpdate(account.id)}>Update</button>
            <button onClick={() => handleDelete(account.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account;
