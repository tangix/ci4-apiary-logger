<?php


namespace App\Models;


use App\Exceptions\RequestException;

class BaseModel extends \CodeIgniter\Model
{

    /**
     * Check the item_version of the new data and make sure the data is in sync between
     * front- and back-end before updating.
     *
     * @param $id
     * @param $new_data
     *
     * @return bool
     * @throws \ReflectionException
     */
    public function validateVersionAndUpdate($id, $new_data): bool
    {
        if ( ! property_exists($new_data, 'item_version')) {
            throw RequestException::forArgumentError();
        }

        $record = $this->find($id);

        // Ext JS increments the item_version by one when saving.
        // item_version - 1 must match what we have in database, otherwise another edit
        // has been made and we bail out.
        if (
        ((int)$new_data->item_version !== (int)$record->item_version)) {
            log_message('critical', 'Fail version. DB:' . print_r($record, true));
            log_message('critical', 'Fail version. newData: ' . print_r($new_data, true));
            return false;
        }

        $new_data->item_version = (int)$new_data->item_version + 1;

        try {
            return $this->update($id, $new_data);
        } catch (\Exception $e) {
            return false;
        }
    }

}
