import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginDialog({ open, onClose }: LoginDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign up &amp; Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>
            The ability to log in, as a verified, trusted member of the
            community is coming soon.
          </p>
          <p>
            This will allow you to directly contribute to the store of community
            information on this site.
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
