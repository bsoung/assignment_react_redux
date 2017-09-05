import React from 'react';

export default ({ accounts, onSubmitTransfer }) => {
	return (
		<div>
			<form onSubmit={onSubmitTransfer}>
				<label htmlFor="accountFrom">Account From</label>
				<select name="accountFrom">
					{accounts.map(account =>
						<option value={account.id} key={account.id}>
							{account.owner}
						</option>
					)}
				</select>

				<label htmlFor="accountTo">Account To</label>
				<select name="accountTo">
					{accounts.map(account =>
						<option value={account.id} key={account.id}>
							{account.owner}
						</option>
					)}
				</select>

				<label htmlFor="amount">Amount</label>
				<input type="number" name="amount" required="required" />

				<button>Submit</button>
			</form>
		</div>
	);
};
