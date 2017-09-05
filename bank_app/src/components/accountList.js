import React from 'react';

export default ({ accounts, onSubmitDeposit, onSubmitWithdraw }) => {
	return (
		<div>
			{accounts.map(account =>
				<div key={account.id} className="account">
					<h3>
						{account.owner}
					</h3>
					<p>
						Balance: {account.balance}
					</p>

					<form onSubmit={onSubmitDeposit}>
						<input type="hidden" name="id" value={account.id} />
						<button>Deposit</button>
					</form>

					<form onSubmit={onSubmitWithdraw}>
						<input type="hidden" name="id" value={account.id} />
						<button>Withdraw</button>
					</form>
				</div>
			)}
		</div>
	);
};
